import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    members: []
}


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { memberId } = action.payload;
            const targetMember = state.members.findIndex(m => m.id === memberId);
            const task = {
                ...action.payload,
                member: state.members[targetMember] || {}
            }
            if (targetMember > -1) {
                state.members[targetMember] = {
                    ...state.members[targetMember],
                    taskCount: state.members[targetMember].taskCount + 1
                }
            }
            state.tasks.unshift(task)
        },
        updateTask: (state, action) => {
            const targetIndex = state.tasks.findIndex(t => t.taskId === action.payload.taskId);
            state.tasks[targetIndex] = action.payload
        },

        addMember: (state, action) => {
            const member = {
                ...action.payload,
                taskCount: 0
            }
            state.members.unshift(member)
        },
        updateMember: (state, action) => {
            const targetIndex = state.members.findIndex(m => m.id === action.payload.id);
            state.members[targetIndex] = action.payload
        },
    },
})


export const { addTask, removeTask, addMember, updateTask, updateMember } = taskSlice.actions;

export default taskSlice.reducer;