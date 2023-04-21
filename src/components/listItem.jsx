import React, { Component } from 'react';
import style from './listItem.module.css'
import classnames from 'classnames/bind'
import cn from 'classnames'

const cls =  classnames.bind(style)
// cc

class ListItem extends Component {

    constructor( props ) {
        super(props)

        this.state = {
            count: 0
        }
        console.log(props,'lll')
    }

    handleDecrease = (id, ev) => {
        console.log('-----', id)
        this.setState({
            count: this.state.count - 1
        })
    }

    handleIncrease = (id) => {
        console.log('state 01',this.state.count,'-----', id)
        this.setState({
            count: this.state.count + 1
        })
        console.log('state 02',this.state.count,'-----', id)
    }

    render() { 
        const _cn = cn({ 'themed-grid-clo-s' : !this.state.count })

        return (
            <div className={`row ` + cls('list-discoloration')}>
                <div className="col-8 themed-grid-col">
                    <span className={cls('title', 'list-title')}>
                        {this.props.data.name}
                    </span>
                </div>
                <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
                <div className={`col-2 themed-grid-col ` + _cn}>
                    <button onClick={(ev) => { this.handleDecrease( this.props.data.id, ev ) }} type="button" className="btn btn-primary"> - </button>
                    <span className={cls('digital')}>{this.state.count}</span>
                    <button onClick={() => this.handleIncrease( this.props.data.id )} type="button" className="btn btn-primary"> + </button>
                </div>
                <div className="col-1 themed-grid-col">
                    <button onClick={() => { this.props.onDelete(this.props.data.id) }} type="button" className="btn btn-danger btn-sm">删除</button>
                </div>
            </div>
        );
    }
}
 
export default ListItem;