import Message from '../../models/Message';
import Task from '../../models/Task'

const Query = {

    messages: async () => {
        return await Message.find()
    },
    tasks: async () => {
        return await Task.find()
    }
}

export default Query