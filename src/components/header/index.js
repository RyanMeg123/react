import React, {Component} from 'react'
import './header.less'
class Header extends Component {
    render() {
        return (
            <div className="header">
                Header
                <span className="header-span">{this.props.name}</span>
            </div>
        )
    }
}
export default Header