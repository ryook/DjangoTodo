import React from 'react';

export class TaskComponent extends React.Component {

    render() {
        return(
            <tr className="task">
                <td>{this.props.name}</td>
                <td><a href="">完了</a></td>
            </tr>
        )
    }
}