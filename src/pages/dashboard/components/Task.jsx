import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    task: {
        padding: theme.spacing(2),
        backgroundColor: '#fff',
        borderTop: '1px solid cyan',
    }
}));

const Task = ({id, text}) => {

    const classes = useStyles();

    return (
        <Draggable draggableId={`draggable-${id}`} index={id}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classes.task}
                >
                    {text}
                </div>
            )}
        </Draggable>
    )
};

export default Task;