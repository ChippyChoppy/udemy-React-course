import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author={faker.internet.userName()}
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author={faker.internet.userName()}
                    timeAgo="Today at 2:00AM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author={faker.internet.userName()}
                    timeAgo="Yesterday at 5:00PM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));