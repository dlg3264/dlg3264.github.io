<?php
	class User {
		
		private $con;
		private $username;
		
		public function _construct($con, $username) {
			$this->con = $con;
			$this->username = $username;
		}
		
		public function getUsername() {
			return->username;
		}
		
		public function get FirstAndLastName() {
			$query = mysqli_query($con, "SELECT concat(firstName, ' ', lastName) as 'name' FROM users WHERE username='$this->username'");
			$row = mysqli_fetch_array($query);
			return $row['name'];
?>