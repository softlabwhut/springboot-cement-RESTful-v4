import { Button,Form,Icon, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber } from 'antd';
import  React, {Component} from 'react';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
class QuestInput extends Component{
    constructor(props)
    {
      super(props);
      this.state={}
    }

    render(){
    const { getFieldDecorator } = this.props.form;
    
    return(
   <Form>

    <FormItem
      {...formItemLayout}
      label="水泥厂名称"
      validateStatus="warning"
    >
    {getFieldDecorator('compName', {
        rules: [{ required: true, message: '请输入正确的水泥厂名称' }],
      })(
        <Input id="compName" placeholder="水泥厂名称" />
      )}
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="设计单位"
      validateStatus="warning"
    >
      <Input placeholder="设计单位" id="designerComp" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="日产量"
      validateStatus="warning"
    >
    {getFieldDecorator('dayCompacity', {
        rules: [{ required: true, message: '请输入真实的日产量!' }],
      })(
        <Input id="dayCompacity" placeholder="日产量" />
      )}
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="窑规格"
      hasFeedback="true"
      validateStatus="success"
    >
      <Input placeholder="窑规格" id="kinSize" />
    </FormItem>
    <FormItem
    {...formItemLayout}
    label="生产线数字"
    hasFeedback
    validateStatus="success"
  >
    <InputNumber id="lineNumber" style={{ width: '100%' }} />
  </FormItem>
    <FormItem
      {...formItemLayout}
      label="预热器"
      hasFeedback
    >
      <Input placeholder="预热器" id="preHeater" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="吨熟料工序电耗"
      hasFeedback
      help="请填写正确的格式"
    >
    {getFieldDecorator('dslgxPower', {
        rules: [{ required: true, message: '请输入吨熟料工序电耗!' }],
      })(
        <Input id="dslgxPower" placeholder="吨熟料工序电耗" />
      )}
    </FormItem>
    <FormItem
    {...formItemLayout}
    label="烧成热耗"
    hasFeedback
    help="kcal/kg.cl"
    >
    {getFieldDecorator('burningHeat', {
        rules: [{ required: true, message: '请输入烧成热耗!' }],
      })(
        <Input id="burningHeat" placeholder="烧成热耗" />
      )}
  </FormItem>
  <FormItem
  {...formItemLayout}
  label="窑运转率"
  hasFeedback
  validateStatus="validating"
  help="%"
  >
  <Input placeholder="窑运转率" id="operateRate" />

</FormItem>
<FormItem
{...formItemLayout}
label="吨熟料余热发电量"
hasFeedback
>
<Input placeholder="吨熟料余热发电量" id="wasteHeatGenElect" />
</FormItem>
    <FormItem
      {...formItemLayout}
      label="问卷填写日期"
      hasFeedback
    >
      <DatePicker id="submitDate" style={{ width: '100%' }} />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="水泥厂所在区域"
      hasFeedback
    >
      <Select defaultValue="1">
        <Option value="1">华北地区京津冀蒙晋</Option>
        <Option value="2">东北地区黑吉辽</Option>
        <Option value="3">华东地区沪皖闽苏赣鲁浙</Option>
        <Option value="4">西北地区陇宁青陕新</Option>
        <Option value="5">西南地区渝川黔藏云</Option>
        <Option value="6">中南地区粤桂琼豫鄂湘</Option>
      </Select>
    </FormItem>
    <FormItem
    {...formItemLayout}
    label="填写人"
    hasFeedback="true"
    validateStatus="success"
  >
    <Input placeholder="问卷填写人" id="submiter" />
  </FormItem>

    <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">提交数据</Button>
        </FormItem>
  </Form>

        );

    }

}
const MyQuestInput = Form.create()(QuestInput);
export default MyQuestInput;