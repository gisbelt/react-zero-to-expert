import { useEffect } from 'react'
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { Toaster, toast } from 'sonner'

export const JournalPage = () => {

	const dispatch = useDispatch();
	const { isSaving, active, messageSaved } = useSelector( state => state.journal ) 
	const onClickNewNote = () => {
		dispatch( startNewNote() );		
	}

	useEffect(() => {
		if( messageSaved.length > 0 ) {
			toast.success(`${messageSaved}`)
		}
	}, [messageSaved])

	return (
		<JournalLayout>
			<Toaster position="bottom-right" richColors expand={true} closeButton />

			{ 
				!!active 
				? <NoteView /> // Note View 
				: <NothingSelectedView /> // Nothing selected 
			}

			<IconButton
				onClick={ onClickNewNote }
				disabled= { isSaving }
				size='large'
				// hidden= { !!active }
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }}/>
			</IconButton>
		</JournalLayout>
	)
}
