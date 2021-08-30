import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));


const Question = ({title, type, questions}) => {
    console.log("Question", title)
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    const handleSubmit = () => {
    };
    const handleRadioChange = () => {
    };
    const ChoiceButton = (key) => {
        let choice = <></>;
        if (type === 'SingleChoice') choice = <Radio/>;

        if (type === 'MultipleChoice') choice= <Checkbox icon={<FavoriteBorder/>} checkedIcon={
            <Favorite/>} name={key}/>;
        return choice;
    }

    return <form onSubmit={handleSubmit}>


        <FormControl component="fieldset" error={error} className={classes.formControl}>
            <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                {questions.map((opt, key) =>
                    <FormControlLabel key={key} value={key} control={ChoiceButton(key)} label={opt}/>)}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                Check Answer
            </Button>
        </FormControl>

    </form>

};
export default Question;