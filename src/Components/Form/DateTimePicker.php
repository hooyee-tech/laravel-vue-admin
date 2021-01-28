<?php


namespace SmallRuralDog\Admin\Components\Form;


class DateTimePicker extends DatePicker
{
    protected $componentName = "DateTimePicker";

    protected $format = "yyyy-MM-dd HH:mm:ss";
    protected $valueFormat = "yyyy-MM-dd HH:mm:ss";
    protected $defaultval = [];

    static public function make($value = null, $type = "datetime")
    {
        $value = $value?$value:now()->toDateTimeString();

        return (new DateTimePicker($value))->type($type);
    }
    
    /**
     * 可选，选择器打开时默认显示的时间
     * @param Date $defaultValue
     * @return $this
     */
    public function defaultval($defaultval)
    {
        $this->defaultval = $defaultval;
        return $this;
    }

}
