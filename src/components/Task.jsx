import styles from './Task.module.css';

import { IconButton } from './IconButton';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export const Task = ({
  id,
  name,
  concluded,
  onConclude,
  onDeleteTask,
}) => {
  const [isConcluded, setIsConcluded] = useState(concluded);

  const handleIsConcluded = () => {
    setIsConcluded(!isConcluded);
    onConclude(id, !isConcluded);
  };

  const handleOnDeleteTask = () => onDeleteTask(id);

  return (
    <li className={styles.task} id={id}>
      <input
        type="checkbox"
        className={styles.checkbox}
        title={
          isConcluded
            ? 'Desmarcar tarefa como concluída'
            : 'Marcar tarefa como concluída'
        }
        onChange={handleIsConcluded}
        checked={isConcluded}
      />

      <p className={isConcluded ? styles.concluded : styles.notConcluded}>
        {name}
      </p>

      <IconButton title="Apagar tarefa" onClick={handleOnDeleteTask}>
        <Trash />
      </IconButton>
    </li>
  );
};
