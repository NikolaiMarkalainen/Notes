import { status } from "./types";

export type NotePaginationState ={
    notes: Note[],
    currentPage: number,
    pages: number,
    isLoading: boolean,
    error: null
};

export type NoteState = {
    notes: Note[],
    status: status,
    error: null,
};

export type PostNote = {
    content: string,
    title: string,
    author: string,
    id: number,
    teamId: number | null,
    userId: number
};

export type Note = {
    title: string,
    author: string,
    content: string,
    id: number,
    userId: number,
    teamId: number | null
};

export type NotePagination = {
    notes: Note[],
    pages: number,
    currentPage: number,
    totalResults: number
};

export type CreateNoteResponse = {
    data: Note;
};

export type NoteCreation = {
    title: string,
    author: string,
    content: string,
    id: number,
    userId: number,
    teamId?: number
};
