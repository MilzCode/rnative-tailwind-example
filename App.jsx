import React, { useState } from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const ExampleOne = () => {
  const [tableHead] = useState(['Head', 'Head2', 'Head3', 'Head4']);
  const [tableData] = useState([
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd'],
  ]);

  // Simulando Tailwind CSS con estilos inline
  const tailwind = {
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 30,
      backgroundColor: '#fff',
    },
    head: {
      height: 40,
      backgroundColor: '#f1f8ff',
    },
    text: {
      margin: 6,
    },
  };

  return (
    <View style={tailwind.container}>
      <Table
        borderStyle={{ borderWidth: 2 }}
        className="border border-red-500 text-3xl"
      >
        <Row data={tableHead} style={tailwind.head} textStyle={tailwind.text} />
        <Rows data={tableData} textStyle={tailwind.text} />
      </Table>
    </View>
  );
};

export default ExampleOne;
