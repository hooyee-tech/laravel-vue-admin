<?php

namespace SmallRuralDog\Admin\Controllers;

use SmallRuralDog\Admin\Components\Attrs\SelectOption;
use SmallRuralDog\Admin\Components\Form\Input;
use SmallRuralDog\Admin\Components\Form\Select;
use SmallRuralDog\Admin\Components\Form\Upload;
use SmallRuralDog\Admin\Components\Grid\Avatar;
use SmallRuralDog\Admin\Components\Grid\Tag;
use SmallRuralDog\Admin\Form;
use SmallRuralDog\Admin\Grid;
use SmallRuralDog\Admin\Components\Form\Radio;
use SmallRuralDog\Admin\Components\Form\RadioGroup;

class UserController extends AdminController
{

    protected function grid()
    {

        $userModel = config('admin.database.users_model');
        $grid = new Grid(new $userModel());
        $grid
            ->quickSearch(['name', 'username'])
            ->quickSearchPlaceholder("用户名 / 名称")
            ->pageBackground()
            ->defaultSort('id', 'asc')
            ->selection()
            ->stripe(true)->emptyText("暂无用户")
            ->perPage(10);

        $grid->column('id', "ID")->width(80);
        $grid->column('avatar', '头像')->width(80)->align('center')->component(Avatar::make());
        $grid->column('username', "用户名");
        $grid->column('name', '用户昵称');
        $grid->column('roles.name', "角色")->component(Tag::make()->effect('dark'));
        $grid->column('status','状态')->customValue(function ($row, $value) {
            return $value==1?"<span style='color:green;'>启用</span>":"<span style='color:red;'>禁用</span>";
        });
        $grid->column('created_at');
        $grid->column('updated_at');

        return $grid;
    }

    protected function form()
    {

        $userModel = config('admin.database.users_model');
        $permissionModel = config('admin.database.permissions_model');
        $roleModel = config('admin.database.roles_model');
        $form = new Form(new $userModel());

        $userTable = config('admin.database.users_table');
        $connection = config('admin.database.connection');

        $form->item('username', '用户名')
            ->serveCreationRules(['required', "unique:{$connection}.{$userTable}"])
            ->serveUpdateRules(['required', "unique:{$connection}.{$userTable},username,{{id}}"])
            ->component(Input::make());
        $form->item('name', '名称')->component(Input::make()->showWordLimit()->maxlength(20));
        $form->item('avatar', '头像')->component(Upload::make()->avatar()->path('avatar')->uniqueName());
        $form->item('password', '密码')->serveCreationRules(['required', 'string', 'confirmed'])->serveUpdateRules(['confirmed'])->ignoreEmpty()
            ->component(function () {
                return Input::make()->password()->showPassword();
            });
        $form->item('password_confirmation', '确认密码')
            ->copyValue('password')->ignoreEmpty()
            ->component(function () {
                return Input::make()->password()->showPassword();
            });
        $form->item('roles', '角色')->component(Select::make()->block()->multiple()->options($roleModel::all()->map(function ($role) {
            return SelectOption::make($role->id, $role->name);
        })->toArray()));
        $form->item('permissions', '权限')->component(Select::make()->clearable()->block()->multiple()->options($permissionModel::all()->map(function ($role) {
            return SelectOption::make($role->id, $role->name);
        })->toArray()));
        $form->item('status', '状态')->component(RadioGroup::make(1, [
            Radio::make(1, "启用"),
            Radio::make(2, "禁用")
        ]));

        $form->saving(function (Form $form) {
            if ($form->username == 'admin' && $form->status == '2') {
                return \Admin::responseError("admin不能被禁用");
            }
            if ($form->password) {
                $form->password = bcrypt($form->password);
            }
        });

        $form->deleting(function (Form $form, $id) {
            if (\Admin::user()->id == $id) {
                return \Admin::responseError("删除失败");
            }
        });
        return $form;
    }
}
