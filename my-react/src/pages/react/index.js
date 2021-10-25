import React, { } from 'react'
import {Tabs, Card} from 'antd'
import styles from './index.less'
import ContextKw from './sort/context'
import { Parent } from '../../REACT-API/React-ref系列/Output'

const ReactLearning = () => {
    return(<Card className={styles.Card}>
        <Tabs defaultActiveKey="1" tabPosition="left" >
            <Tabs.TabPane tab="context" key="1">
                <ContextKw></ContextKw>
            </Tabs.TabPane>
            <Tabs.TabPane tab="router" key="2">
                 of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Ref" key="2">
                 <Parent/>
            </Tabs.TabPane>
        </Tabs>
    </Card>)
}

export default ReactLearning