import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

export default props =>
    <Paper>
        <Tabs
            value="0"
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Copyright" />
        </Tabs>
    </Paper>