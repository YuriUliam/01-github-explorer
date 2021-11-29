import React from 'react'

interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export const RepositoryItem: React.FC<RepositoryItemProps> = (props) => {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>Forms in React</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}