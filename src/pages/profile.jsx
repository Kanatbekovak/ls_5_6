import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import { notification } from 'antd'
import { useState } from 'react'
import {postService} from '../services/post.service.js'

export function Profile() {
    const queryClient = useQueryClient()
    
    const {data,isPending} = useQuery({
        queryKey:['posts'],
        queryFn: postService.get
    })
    
    const {mutate,isPending: deletePending} = useMutation({
        mutationFn: postService.delete,
        onSuccess() {
            queryClient.invalidateQueries({queryKey:['posts']})
        }
    })

    if(isPending) {
        return <div>Loading...</div>
    }

    return (
        <>
            <CreatePost />
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.summary}</p>
                        <button onClick={() => mutate(item.id)} disabled={deletePending}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

function CreatePost() {
    const [title,setTitle] = useState('')
    const [summary,setSummary] = useState('')

    const [api,contexHolder] =notification.useNotification();
    const openNotificationWithIcon = ({type,title,description}) => {
        api[type]({
            title,
            description
        });
    };

    const queryClient = useQueryClient()

    const {mutate,isPending} = useMutation({
        mutationFn: postService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['posts']})
            openNotificationWithIcon({
                type:'success',
                title: 'Успешно Создан',
                description: 'Успешно Создан'
            })
        }
    })

    const handleSubmit = () => {
        mutate({title,summary})
        setTitle('')
        setSummary('')
    }

    return (
        <div>
            {contexHolder}
            <input type='text' placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)} />
            <input type='text' placeholder={'Title'} value={summary} onChange={e => setSummary(e.target.value)} />
            <button onClick={handleSubmit} disabled={isPending}>Create</button>
        </div>
    )
}