<template>
    <div id="App">
        <h1>Monster's Rollodex</h1>
        <Search handleSearch={handleSearch}/>
        <cardlist monsters={filteredMonsters}/>    
    </div>
</template>

<script>
export default {
 name:'Home'
}
</script>

<style>
 #App {
    text-align: center;
  }
  h1 {
    font-family: 'Bigelow Rules';
    font-size: 72px;
    color: #0ccac4;
  }
</style>