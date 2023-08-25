import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return( 
    <div style={{height : '100vh'}}>
        <PrettyChatWindow
        projectId = "69da762a-7114-4d0a-90ef-bff73d74244c"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}


        />

    </div>
    )
}
 
export default ChatsPage