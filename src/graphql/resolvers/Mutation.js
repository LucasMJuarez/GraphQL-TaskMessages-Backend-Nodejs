import Message from '../../models/Message';
import Task from '../../models/Task'

const Mutation = {

    createMessage: async (_, { title, content, author }) => {
        const newMessage = new Message({ title, content, author })
        return await newMessage.save()
    },


    createTask: async (_, { title, description }) => {
        const newTask = new Task({ title, description })
        return await newTask.save()
    },

    deleteMessage: async (_, { _id }) => {
        return await Message.findOneAndDelete(_id)
    },

    deleteTask: async (_, { _id }) => {
        return await Task.findOneAndDelete(_id)
    }

};


export default Mutation;