const asyncHandler = require("express-async-handler");
const Chat = require("../models/chat.model");
const User = require("../models/user.model")

// access chat
const accessChat = async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: "userId not present in the request body." });
    }

    try {
        const existingChat = await Chat.findOne({
            isGroupChat: false,
            users: { $all: [req.user._id, userId] }
        }).populate("users", "-password").populate("latestMessage").populate("latestMessage.sender");

        if (existingChat) {
            return res.status(200).json(existingChat);
        }

        const newChat = new Chat({
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId]
        });

        await newChat.save();

        const populatedChat = await Chat.findOne({ _id: newChat._id }).populate("users", "-password");

        res.status(201).json(populatedChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// get chat
const getChats = async (req, res) => {
    try {
        const chats = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } });

        if (chats.length === 0) {
            return res.status(422).json({ message: "No chats found." });
        }

        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// create group chat 
const createGroupChat = asyncHandler(async (req, res) => {

})

// rename group chat
const renameGroup = asyncHandler(async (req, res) => {

})

// remove other user from group chat
const removeFromGroup = asyncHandler(async (req, res) => {

})

// add other user to chat group
const addToGroup = asyncHandler(async (req, res) => {

})

module.exports = { accessChat, getChats, createGroupChat, renameGroup, removeFromGroup, addToGroup };