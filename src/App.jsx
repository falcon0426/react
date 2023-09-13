import React, { useEffect, useState } from 'react'
import ColorfulMessage from './cmoponents/ColorfulMessage'

const App = () => {
    const [incopleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいいい'])
    const [copleteTodos, setCompleteTodos] = useState(['uuuuu'])
    const [todoText, setTodoText] = useState('')

    const onChangeTodoText = (event) => setTodoText(event.target.value)

    const onClickAdd = () => {
        if (todoText === "") {
            return
        }
        const newTodos = [...incopleteTodos, todoText]
        setIncompleteTodos(newTodos)
        setTodoText("")
    }

    const onClickDelete = (index) => {
        const newTodos = [...incopleteTodos]
        newTodos.splice(index, 1)
        setIncompleteTodos(newTodos)
    }

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incopleteTodos]
        newIncompleteTodos.splice(index, 1)

        const newCompleteTodos = [...incopleteTodos, incopleteTodos[index]]
        setIncompleteTodos(newIncompleteTodos)
        setCompleteTodos(newCompleteTodos)
    }


    return (
        <>
            <div className='input-area'>
                <input placeholder='TODOを入力' onChange={onChangeTodoText}></input>
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className='incomplete-area'>
                <p className='title'>未完了のTODO</p>

                <ul>
                    {incopleteTodos.map((todo, index) => {
                        return (
                            <div key={todo} className='list-row'>
                                <li>{todo}</li>
                                <button onClick={() => onClickComplete(index)}>完了</button>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        )
                    })}
                </ul >

            </div >
            <div className='complete-area'>
                <p className='title'>完了のTODO</p>

                <ul>
                    {copleteTodos.map((todo) => {
                        return (
                            <div key={todo} className='list-row'>
                                <li>{todo}</li>
                                <button>戻す</button>
                            </div>
                        )
                    })}
                </ul>

            </div>
        </>
    );
}

export default App