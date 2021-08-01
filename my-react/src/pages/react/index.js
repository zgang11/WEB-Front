import React, { } from 'react'
import {Tabs, Card} from 'antd'
import styles from './index.less'
import ContextKw from './sort/context'

const ReactLearning = () => {
    return(<Card className={styles.Card}>
        <Tabs defaultActiveKey="1" tabPosition="left" >
            <Tabs.TabPane tab="context" key="1">
                <ContextKw></ContextKw>
            </Tabs.TabPane>
            <Tabs.TabPane tab="router" key="2">
                 of Tab Pane 1
            </Tabs.TabPane>
        </Tabs>
    </Card>)
}

export default ReactLearning