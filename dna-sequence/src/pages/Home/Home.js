import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

const Home = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    return (
        <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
                layout: formLayout,
            }}

        >

            <Form.Item label="Field A">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field T">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field G">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field C">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default Home;