import { createSlice } from '@reduxjs/toolkit';

// active: {
// 	id: 'ABC123', // Id comes from firebase
// 	title: '',
// 	body: '',
// 	date: 123456, // Numerical format
// 	imageUrls: [], // String array: url of images uploaded by people
// }

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
		messageSaved: '', 
		notes: [],
		active: null,
	},
	reducers: {
		savingNewNote: ( state ) => {
			state.isSaving = true;
		},
		addNewEmptyNote: ( state, action ) => {
			state.notes.push( action.payload );
			state.isSaving = false;
		},
		setActiveNote: ( state, action ) => {
			state.active = action.payload;
			state.messageSaved = ''
		},
		setNote: ( state, action ) => {
			state.notes = action.payload;
		},
		setSaving: ( state ) => {
			state.isSaving = true
			state.messageSaved = ''
		},
		updatedNote: ( state, action ) => {
			state.isSaving = false
			state.notes = state.notes.map( note => {
				if( note.id === action.payload.id ){
					return action.payload;
				}
				return note;
			})
			state.messageSaved = `Note: ${action.payload.title}, properly updated`
		},
		setPhotosToActiveNote: ( state, action ) => {
			state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
			state.isSaving = false;
		},
		deleteNoteById: ( state, action ) => {
			state.active = null;
			state.notes = state.notes.filter(note => note.id !== action.payload);
			state.messageSaved = `Note properly deleted`
		},
		clearNotesLogout: ( state ) => {
			state.isSaving = false,
			state.messageSaved = '',
			state.notes = [],
			state.active = null
		}
	},
})

// Action creators are generated for each case reducer function
export const { 
	savingNewNote,
	addNewEmptyNote, // create a new entry
	setActiveNote, // set what is the active note
	setNote, // load notes when we have already read them from somewhere else
	setSaving, // do something when we are recording the notes
	updatedNote, // update a note
	setPhotosToActiveNote, 
	deleteNoteById, // delete a note, the objective would be to remove it from our list.
	clearNotesLogout,
} = journalSlice.actions