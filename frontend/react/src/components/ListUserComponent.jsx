import React, { Component } from 'react'
import UserService from '../services/UserService'
import { PencilIcon,CheckIcon,LinkIcon,TrashIcon} from '@heroicons/react/20/solid'
class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

   componentDidMount(){
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Tasks List</h2>
                 <div className="content-center items-center py-2">
                 <button
            type="button"
            className="inline-flex content-center rounded-md px-3 py-2 text-sm font-semibold bg-slate-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={this.addUser}
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Add Task
          </button>
                 </div>
                 
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Task Name</th>
                                    <th> Task Description</th>
                                    <th> Task Deadline</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> {user.firstName} </td>   
                                             <td> {user.lastName}</td>
                                             <td> {user.emailId}</td>
                                             <td>
                                                
                                                 <button onClick={ () => this.editUser(user.id)} className="inline-flex content-center rounded-md px-3 py-2 text-sm font-semibold bg-blue-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="inline-flex content-center rounded-md px-3 py-2 text-sm font-semibold bg-red-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><TrashIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Delete</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="inline-flex content-center rounded-md px-3 py-2 text-sm font-semibold bg-green-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            View</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent
