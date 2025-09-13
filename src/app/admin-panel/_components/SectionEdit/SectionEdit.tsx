"use client"

import { Section } from "@prisma/client"
import { useState } from "react"
import { publicChanges } from "../../utils/public-changes" 
import { useRouter } from "next/navigation"

interface Props {
    section: Section
}

export default function SectionEdit({ section } : Props) {

    const [edit, setEdit] = useState(false)
    const [valueInput, setValueInput] = useState(section.title)

    const router = useRouter()

    const bindPublicChange = publicChanges.bind(null, section.id)

    const publicTitle = (data: FormData) => {
      bindPublicChange(data)
      setEdit(prev => !prev)
      router.refresh()
    }

    return (
        <div className="cms-page__section-edit section-edit">
          <p className="section-edit__title">Заголовок секции</p>
          <form className="section-edit__form" action={publicTitle}>
            <label className="section-edit__form-label" htmlFor="">
              <span className="section-edit__label-conts">Текст заголовка:</span>
              <input 
                className={edit ? "section-edit__form-input" : "section-edit__form-input_disable"}
                type="text"
                value={valueInput}
                name="section_title"
                onChange={(e) => setValueInput(e.target.value)}
              />
            </label>
            {!edit ? (
              <span className="section-edit__edit-btn" onClick={() => setEdit(prev => !prev)}>Редактировать</span>
            ) : (
              <button 
                  className="section-edit__public-btn" 
                  type="submit"
              >
                  <span>Опубликовать</span>
              </button>
            )}
          </form>
        </div>
    )
}
