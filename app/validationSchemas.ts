import { z } from "zod";

//validate entry with zod
export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required')
});


export const fetchIssueSchema = z.object({
    id: z.number().min(1, 'ID is required')
});

export const updateIssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required'),
    status: z.string().min(1, "Status is required"),
    priority: z.string().min(1, "Priority is required")
});
