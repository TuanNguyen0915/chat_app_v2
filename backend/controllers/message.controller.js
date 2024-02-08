import Message from '../models/message.model.js'
import Conversation from '../models/conversation.model.js'

const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params
    const senderId = req.user._id
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    })

    // create a new conversation between sender and receiver
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      })
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message: req.body.message,
    })
    
    if(newMessage) {
      conversation.messages.push(newMessage._id)
      await conversation.save()
    }

    res.status(201).json({ success: true, newMessage })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { sendMessage }
