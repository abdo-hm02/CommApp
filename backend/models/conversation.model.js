import mongoose from 'mongoose';

const conversationSchema = new mongooseSchema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ],
}, { timestamp: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;