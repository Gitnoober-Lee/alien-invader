import * as React from 'react';
import axios from "axios"
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

// return records fetched from game server
// userId send in from parent component
function RecordList({userId, userName, score, end, saved, setSaved}) {
    const EndGameCondition = {
        Win: "win",
        Lose: "lose",
        Playing: "playing",
      };
    const [records, setRecords] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    // which tap currently reading, my || all, etc
    const [tap, setTap] = useState("");
    const [sortDirection, setSortDirection] = useState("desc");
    const serverUrl = "https://alieninvader.uc.r.appspot.com"

    function prevPage(){
        // pageNum - 1 if there's still previous pages
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
    }

    function nextPage(){
        // pageNum + 1 if there's still next pages
        if (pageNum < totalPages) {
            setPageNum(pageNum + 1);
        }
    }

    function saveRecord() {
        // SECOND: save record
        const saveRecordUrl = `${serverUrl}/saveRecord`
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const date = `${year}-${month}-${day}`;

        // KEY!: the property name must be exactly the same is the name in the backend controller
        const recordPostData = {
            userId,
            userName,
            score,
            date
        }

        axios.post(saveRecordUrl, recordPostData)
            .then(response => {
                console.log(response.data);
                // display the new record list again
                displayAllRecords();
            })
            .catch(error => {
                console.log(error.message);
            })

        // set save to true
        setSaved(true);
    }


    function deleteRecord(id) {
        const deletePostUrl = `${serverUrl}/deleteRecord`

        const deletePostData = {id: id}

        axios.post(deletePostUrl, deletePostData)
            .then(response => {
                console.log(response.data);
                // display the new record list again
                displayMyRecords();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // side effects, very nice hook
    // the call back function will execute whenever the pageNum, which is the dependency changed
    useEffect(() => {
        if (tap === "all") { displayAllRecords();}
        if (tap === "my") { displayMyRecords();}
    }, [pageNum]);

    function displayAllRecords(){
        // use http instead of https, no SSL settings yet
        const allRecordUrl = `${serverUrl}/findAllRecord?pageNum=${pageNum}&pageSize=${pageSize}&sortDirection=${sortDirection}`
        setTap("all");

        axios.get(allRecordUrl)
            .then(response => {
                console.log(allRecordUrl);
                console.log(response.data);
                setTotalPages(response.data["totalPages"])
                setRecords(response.data["recordList"]);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    function displayMyRecords(){
        const myRecordUrl = `${serverUrl}/myRecord?pageNum=${pageNum}&pageSize=${pageSize}&userId=${userId}`
        setTap("my");

        axios.get(myRecordUrl)
            .then(response => {
                console.log(myRecordUrl);
                // setRecords(response.data);
                console.log(response.data)
                setTotalPages(response.data["totalPages"])
                setRecords(response.data["recordList"])
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // save Button shows up when game is finished
    // inline style display: flex can make multiple lines into one
    // user can only delete his own record
    return (
        <div>
            <div>
                {(end === EndGameCondition.Lose && saved === false)
                    ? <Button variant="contained" color="primary" className='Button' onClick={saveRecord}>Save Record</Button>
                    : <></>
                }
            </div>
            <div>
                <Button variant="contained" color="primary" className='Button' onClick={displayAllRecords}>All Records</Button>
                <Button variant="contained" color="primary" className='Button' onClick={displayMyRecords}>My Records</Button>

                {records.length !== 0
                    ?   <table className='RecordList'>
                            <tbody>
                                {records.map(record => (
                                    <tr key={record.id} style={{display: "flex"}}>

                                            <Record record={record} key={record.id}/>

                                            {tap === "my"
                                                ? <td><Button variant="contained" color="primary" className='Button' onClick={() => deleteRecord(record.id)}>Delete</Button></td>
                                                : ""
                                            }

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    :  ""
                }

                {pageNum > 1                    
                    ? <Button variant="contained" color="primary" className='Button' onClick={prevPage}>Prev</Button>
                    : <></>
                }
                {pageNum < totalPages
                    ?   <Button variant="contained" color="primary" className='Button' onClick={nextPage}>Next</Button>
                    : <></>
                }
            </div>
        </div>
    )
}

// single record is a row in the table, td is table data
function Record({record}) {

    return (
        <>
            <td>[{record.userId.substring(record.userId.length-5, record.userId.length-1)}]</td>
            <td>{record.userName}</td>
            <td>{record.score}</td>
            <td>{record.date}</td>
        </>
    )
}

export default RecordList;
