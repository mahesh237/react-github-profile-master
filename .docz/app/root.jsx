import React from 'react'
import { setConfig, hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import Wrapper from 'null'

const Root = () => <Theme hashRouter={undefined} wrapper={Wrapper} />

export default hot(module)(Root)
