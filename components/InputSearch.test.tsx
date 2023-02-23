import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputSearch } from './InputSearch'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('MyComponent', () => {
	it('handleChange()', () => {
		render(<InputSearch />)
		const event = { target: { value: 'test' } }
		const input: HTMLInputElement = screen.getByTestId('input')
		fireEvent.change(input, event)
		expect(input.value).toBe('test')
	})

	it('handleKeyUp()', () => {
		const mockPush = jest.fn()
		const useRouter = jest.spyOn(require('next/router'), 'useRouter')
		useRouter.mockImplementation(() => ({
			route: '/',
			push: mockPush,
		}))

		render(<InputSearch />)
		const inputText = 'test'

		fireEvent.change(screen.getByTestId('input'), {
			target: { value: `${inputText}` },
		})
		fireEvent.keyUp(screen.getByTestId('input'), { key: 'Enter' })

		expect(mockPush).toHaveBeenCalledWith(`/search?search=${inputText}`)
	})
})
