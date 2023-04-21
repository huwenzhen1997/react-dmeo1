import React, { Component } from 'react';
import './App.css';
import ListItem from './components/listItem';
// import ListItem from './components/listItemFunc';


  const listData = [
    {
      id : 1,
      name: "Sony 65寸高清液晶电视",
      price: 4000,
      stock: 10
    },
    {
      id : 2,
      name: "苹果 MaxPro",
      price: 6000,
      stock: 100
    },
    {
      id : 3,
      name: "华硕笔记本",
      price: 10000,
      stock: 20
    },
  ]
  class App extends Component {
    renderList () {
      return listData.map( item => {
        return <ListItem key={item.id} data={item} onDelete={this.handleDelete} />
      })
    }

    handleDelete = (id) => {
      console.log('id', id)
    }

    render() { 
      return (
        <div className="container">
          <span className="title">Header</span>
          {listData.length === 0 && <div className='text-center'>购物车是空的</div>}
          {this.renderList()}
        </div>
      );
    }
  }
export default App;
