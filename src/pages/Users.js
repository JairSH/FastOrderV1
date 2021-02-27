import React, { Component } from 'react';

class Users extends React.Component {
    //const Users = () => {
        /*const [equipo, setEquipo] = React.useState([])
    
        React.useEffect(() =>{
            obtenerDatos()
        },[])
    
        const obtenerDatos = async () =>{
            const data = await fetch('http://jsonplaceholder.typicode.com/users')
            const users = await data.json()
            setEquipo(users)
        }
        */
    
       state = {
        loading: true,
        error: null,
        data: undefined,
      };
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        this.setState({ loading: true, error: null });
    
        try {
          const data = await fetch('http://jsonplaceholder.typicode.com/users');
          this.setState({ loading: false, data: data });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };
    
      render() {
        if (this.state.loading === true) {
          return 'Loading...';
        }
    
        if (this.state.error) {
          return `Error: ${this.state.error.message}`;
        }
        return(
            <div>
                <h1>Api</h1>
                <ul>
                    {
                      {this.setState.data}
                }
                </ul>
            </div>
        );
    
        /*return(
            <div>
                <h1>Usuarios</h1>
                <ul>
                    {
    
    
    
    
                        /*
                        equipo.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
        );
        */

}
}

export default Users;