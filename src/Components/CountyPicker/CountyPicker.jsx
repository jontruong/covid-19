import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountyPicker.module.css'

import { fetchCounty } from '../../api';

const CountyPicker = ({ handleCountyChange }) => {
    const [fetchedCounties, setFetchedCounties] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCounties(await fetchCounty());
        }

        fetchAPI()
    }, [setFetchedCounties]);

    console.log(fetchedCounties)

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountyChange(e.target.value)}>
                <option value="">
                    Usa
               </option>
                {/* {fetchedCounties.map((county, i) => <option key={i} value={county}>{county}</option>)} */}
            </NativeSelect>
        </FormControl>
    )
}

export default CountyPicker