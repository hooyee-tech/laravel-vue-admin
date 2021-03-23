<?php


namespace SmallRuralDog\Admin\Controllers;


use SmallRuralDog\Admin\Components\Attrs\TransferData;
use SmallRuralDog\Admin\Components\Form\Transfer;
use SmallRuralDog\Admin\Components\Grid\Tag;
use SmallRuralDog\Admin\Form;
use SmallRuralDog\Admin\Grid;
use SmallRuralDog\Admin\Components\Form\Radio;
use SmallRuralDog\Admin\Components\Form\RadioGroup;

class RoleController extends AdminController
{


    protected function grid()
    {
        $roleModel = config('admin.database.roles_model');

        $grid = new Grid(new $roleModel());

        $grid->quickSearch(['slug', 'name']);

        $grid->column('id', 'ID')->width('80px')->sortable();
        $grid->column('slug', "标识");
        $grid->column('name', "名称");
        $grid->column('permissions.name', "权限")->component(Tag::make()->type('info'));
        $grid->column('status','状态')->customValue(function ($row, $value) {
            return $value==1?"<span style='color:green;'>启用</span>":"<span style='color:red;'>禁用</span>";
        });
        $grid->column('created_at');
        $grid->column('updated_at');


        return $grid;
    }

    public function form()
    {
        $permissionModel = config('admin.database.permissions_model');
        $roleModel = config('admin.database.roles_model');
        $form = new Form(new $roleModel());
        $form->item('slug', "标识")->required();
        $form->item('name', "名称")->required();
        $form->item('permissions', "权限", 'permissions.id')->component(
            Transfer::make()->data($permissionModel::get()->map(function ($item) {
                return TransferData::make($item->id, $item->name);
            }))->titles(['可授权', '已授权'])->filterable()
        );
        $form->item('status', '状态')->component(RadioGroup::make(1, [
            Radio::make(1, "启用"),
            Radio::make(2, "禁用"),
        ]));

        $form->saving(function (Form $form,$id) {
            if ($id == 1) {
                return \Admin::responseError("administrator名称不支持修改");
            }
            if ($form->slug == 'administrator' && $form->status == '2') {
                return \Admin::responseError("administrator不能被禁用");
            }
        });

        $form->deleting(function (Form $form, $id) {
            if (1 == $id) {
                return \Admin::responseError("administrator不能删除");
            }
        });
        return $form;
    }
}
