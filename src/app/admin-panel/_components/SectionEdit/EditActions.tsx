"use client"

import { useState } from "react"

export default function EditActions({ editTitle } : { editTitle : string }) {

    const [edit, setEdit] = useState(false)

    return (
        <div className="section-edit__edit-actions">
            <label className="section-edit__form-label" htmlFor="">
              <span className="section-edit__label-conts">Текст заголовка:</span>
              <input 
                className="section-edit__form-input"
                type="text"
                defaultValue={editTitle}
                disabled={!edit}
                name="section_title"
              />
            </label>
            {!edit ? (
                <p className="section-edit__edit-btn" onClick={() => setEdit(prev => !prev)}>
                    <span>Редактировать</span>
                </p>
            ) : (
                <button 
                    className="section-edit__public-btn" 
                    type="submit"
                    onClick={() => setEdit(prev => !prev)}
                >

                    <span>Опубликовать</span>
                </button>
            )}
        </div>
    )
}
