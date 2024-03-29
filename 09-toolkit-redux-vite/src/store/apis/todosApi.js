import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
	reducerPath: 'todos',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com'
	}),
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => '/todos', // take the baseUrl and concatenate it '/todos'.
		}),

		getTodoById: builder.query({
			query: (todoId) => `/todos/${ todoId }`, // take the baseUrl and concatenate it '/todos'.
		})
	})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;