import { Breadcrumb } from 'antd';

function BreadcrumbSetion(props){
    let BreadcrumbData = props.value||[];
    return (
        <Breadcrumb style={{margin: "16px 0"}}>
            {
                BreadcrumbData.map(item=>{
                    return (
                    <Breadcrumb.Item key="item">{item}</Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default BreadcrumbSetion;