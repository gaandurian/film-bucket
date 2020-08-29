import React, { useState } from 'react'
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ handleSubmit }) {

  const [searchValue, setSearchValue] = useState("");
    return (
        <form onSubmit={(e) => handleSubmit(e, searchValue)}>
        <InputGroup style={{ marginTop: 24, marginBottom: 17 }}>
          <Input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button color="danger">
              <FaSearch />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    )
}
