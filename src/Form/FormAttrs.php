<?php

namespace SmallRuralDog\Admin\Form;


class FormAttrs
{
    public $className;
    public $style;

    public $rules;
    public $inline = false;
    public $labelPosition = 'right';
    public $labelWidth = "200px";
    public $labelSuffix = "：";
    public $hideRequiredAsterisk = false;
    public $showMessage = true;
    public $inlineMessage = false;
    public $statusIcon = false;
    public $validateOnRuleChange = true;
    public $size="small";
    public $disabled = false;

    public $hideTab = true;

    public $isDialog = false;

    public $createButtonName = "创建";
    public $updateButtonName = "保存";
    public $onlyCreateButtonName = "创建";
    public $onlyUpdateButtonName = "保存";
    public $backButtonName = "返回";
    public $buttonWidth;
}
