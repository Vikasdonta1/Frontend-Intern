import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const GetUsersButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${props => props.isLoading ? '#ccc' : '#007bff'};
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isLoading ? '#ccc' : '#0069d9'};
  }
`;

const UserCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const UserCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const UserEmail = styled.div`
  font-size: 1rem;
  color: #555;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setIsLoading(false);
  };

  return (
    <Container>
      <Navbar>
        <BrandName>Brand Name</BrandName>
        <GetUsersButton isLoading={isLoading} onClick={getUsers}>
          {isLoading ? 'Loading...' : 'Get Users'}
        </GetUsersButton>
      </Navbar>
      <UserCardGrid>
        {users.map(user => (
          <UserCard key={user.id}>
            <UserAvatar src={user.avatar} alt={user.first_name} />
            <UserName>{user.first_name} {user.last_name}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserCard>
        ))}
      </UserCardGrid>
    </Container>
  );
}

export default App;
