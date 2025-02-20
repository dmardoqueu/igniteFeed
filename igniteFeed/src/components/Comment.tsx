import { ThumbsUp, Trash } from 'phosphor-react';
import { useTheme } from '../components/ThemeContext';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    const { theme } = useTheme();

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={`${styles.comment} ${theme === 'dark' ? styles.light : styles.dark}`}>
            <Avatar hasBorder={false} src="https://github.com/davidmello04.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>David Mello</strong>
                            <time title='12 de Fevereiro às 16:56' dateTime="2025-02-12 16:56:00">Há cerca de 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button
                        className={styles.applaud}
                        title='Aplaudir'
                        onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
