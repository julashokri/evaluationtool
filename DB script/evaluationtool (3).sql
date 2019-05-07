-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 19, 2019 at 04:25 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evaluationtool`
--

-- --------------------------------------------------------

--
-- Table structure for table `allocation`
--

CREATE TABLE `allocation` (
  `ID` int(11) NOT NULL,
  `employee_ID1` int(11) NOT NULL,
  `task_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `approle`
--

CREATE TABLE `approle` (
  `ID` int(10) NOT NULL,
  `name` varchar(45) NOT NULL,
  `descript` varchar(5000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `approle`
--

INSERT INTO `approle` (`ID`, `name`, `descript`) VALUES
(1, 'super user', 'superuser can do everything'),
(2, 'admin', 'admin can define & submit company/employee'),
(3, 'user', 'user can do evaluate & rate');

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `ID` int(11) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) DEFAULT NULL,
  `street` varchar(45) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `company_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`ID`, `country`, `city`, `state`, `street`, `postal_code`, `phone`, `email`, `company_ID`) VALUES
(1, 'portugal', 'lisbon', '', 'rua da ?', 1258258, 22334455, 'mm@gamil.com', 1),
(2, 'iran', 'tehran', NULL, 'valiasr', 1888225, 22448877, 'mary@yahoo.com', 3),
(4, 'Iran', 'dezful', NULL, 'adl', 66, 2147483647, 'csxc', 3),
(9, 'portugal', 'almada', 'setubal', 'street', 7878, 123456, 'kb@sa', 18),
(10, 'amr', 'ss', 'aa', 'qw', 123, 456, 'jsjjs', 3),
(11, 'port', 'mmmmm', 'mmm', 'asss', 456456, 1234, 'mamam', 21),
(12, 'portugal', 'sintra', 'lisbon', 'rrr', 456, 777777, 'akjxslk', 1),
(13, 'iran', 'dez', 'khouz', 'adl', 899, 898, 'llllllll', 19);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `ID` int(11) NOT NULL,
  `vat_number` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `bossID` int(45) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`ID`, `vat_number`, `name`, `bossID`, `created_at`, `updated_at`) VALUES
(1, 3355225, 'KBZ', 4, '1990-02-12 00:00:00', '2015-01-11 00:00:00'),
(2, 454545, 'google', 6, '1815-02-03 00:00:00', '2017-02-15 00:00:00'),
(3, 123456, 'uninova', 6, '1815-02-01 00:00:00', '2017-05-12 00:00:00'),
(18, 123123, 'qqzzz', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 999999, 'forever', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 20000, 'kkk', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 123456, 'asa', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `headofdep_ID` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `branch_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`ID`, `name`, `headofdep_ID`, `created_at`, `updated_at`, `branch_ID`) VALUES
(1, 'programteam', 1, '1345-02-12 00:00:00', '1245-03-11 00:00:00', 1),
(2, 'tester', 1, '1345-02-12 00:00:00', '1245-03-11 00:00:00', 1),
(3, 'mm', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(11) NOT NULL,
  `internal_ID` int(11) NOT NULL,
  `password` int(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `branch_ID` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `role_ID` int(11) NOT NULL,
  `dep_ID` int(20) NOT NULL,
  `manage_ID` int(10) DEFAULT NULL,
  `AppRole_ID` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `internal_ID`, `password`, `name`, `email`, `birth_date`, `branch_ID`, `created_at`, `updated_at`, `role_ID`, `dep_ID`, `manage_ID`, `AppRole_ID`) VALUES
(4, 123, 321, 'tala', '1234', '0000-00-00', 1, '1345-02-13 00:00:00', '1452-05-11 00:00:00', 3, 0, NULL, 1),
(5, 456, 654, 'maryam berenji', '1234', '0000-00-00', 4, '1345-02-13 00:00:00', '1452-05-11 00:00:00', 3, 0, NULL, 0),
(6, 789, 987, 'parmis', '1234', '0000-00-00', 2, '1345-02-13 00:00:00', '1452-05-11 00:00:00', 3, 0, NULL, 0),
(7, 111, 0, 'mohamad', '1234', '0000-00-00', 2, '1345-02-13 00:00:00', '1452-05-11 00:00:00', 3, 0, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `evalfactor`
--

CREATE TABLE `evalfactor` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

CREATE TABLE `evaluation` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `evaluation_plan`
--

CREATE TABLE `evaluation_plan` (
  `ID` int(11) NOT NULL,
  `eval_ID` int(11) NOT NULL,
  `manager_ID1` int(11) NOT NULL,
  `employee_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `factor`
--

CREATE TABLE `factor` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `evaluation_plan_ID` int(11) NOT NULL,
  `evalfactor_ID` int(11) NOT NULL,
  `describtion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `indicator`
--

CREATE TABLE `indicator` (
  `ID` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `evalfactor_ID` int(11) NOT NULL,
  `obj_ID1` int(11) NOT NULL,
  `grade` int(11) NOT NULL,
  `minlimite` int(11) NOT NULL,
  `maxlimite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `interimteam`
--

CREATE TABLE `interimteam` (
  `id` int(11) NOT NULL,
  `project_ID` int(11) NOT NULL,
  `task_ID` int(10) NOT NULL,
  `employee_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `interimteam`
--

INSERT INTO `interimteam` (`id`, `project_ID`, `task_ID`, `employee_ID`) VALUES
(8, 2, 2, 6),
(9, 2, 1, 5),
(10, 2, 4, 5),
(11, 2, 4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `dep_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`ID`, `name`, `dep_ID`) VALUES
(1, 'david', 1),
(2, 'mary', 2),
(3, 'parmis', 2),
(4, 'pari', 3);

-- --------------------------------------------------------

--
-- Table structure for table `objectives`
--

CREATE TABLE `objectives` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `ID` int(11) NOT NULL,
  `name` varchar(5000) NOT NULL,
  `manager` int(10) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`ID`, `name`, `manager`, `description`, `start_date`, `end_date`) VALUES
(1, 'evaluate', 0, '', '0000-00-00', '0000-00-00'),
(2, 'clean', 0, '', '0000-00-00', '0000-00-00'),
(3, 'my project', 0, 'it should be accepteddddddddd', '0000-00-00', '0000-00-00'),
(6, 'my tool', 0, 'pleeeeeeease', '2018-05-28', '2018-05-31'),
(7, 'aeae', 0, 'fgyjfgjy', '2018-05-28', '2018-05-31'),
(8, 'buy house', 2, 'do it', '2018-05-30', '2018-09-26'),
(11, 'trip', 3, 'undefined', '2018-06-22', '2018-07-28');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `manager_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`ID`, `name`, `created_at`, `updated_at`, `manager_ID`) VALUES
(3, 'cokjkkkj', '1234-05-12 00:00:00', '1245-02-11 00:00:00', 1),
(4, 'Analyser', '1234-02-12 00:00:00', '2014-02-12 00:00:00', 3),
(8, 'designer', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `ID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `project_ID` int(11) NOT NULL,
  `employee_ID` int(10) NOT NULL,
  `eval_plan_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`ID`, `name`, `start_date`, `end_date`, `project_ID`, `employee_ID`, `eval_plan_ID`) VALUES
(1, 'design', '1234-05-16 00:00:00', '1234-05-16 00:00:00', 2, 6, NULL),
(2, 'sort', '2018-05-30 10:49:11', '2018-05-31 10:49:11', 2, 6, NULL),
(3, 'des', '1234-05-16 00:00:00', '1234-05-16 00:00:00', 2, 5, NULL),
(4, 'newtask1', '2018-05-30 20:52:28', '2018-05-31 20:52:28', 2, 5, NULL),
(5, 'pay money', '2018-06-07 11:02:00', '2018-06-30 11:02:00', 8, 5, NULL),
(6, 'get loan', '2018-06-12 10:53:41', '2018-06-29 10:53:41', 8, 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allocation`
--
ALTER TABLE `allocation`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `employee_ID_idx` (`employee_ID1`),
  ADD KEY `task_ID_idx` (`task_ID`);

--
-- Indexes for table `approle`
--
ALTER TABLE `approle`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `foreign` (`company_ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `bossID` (`bossID`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_department_branch1_idx` (`branch_ID`),
  ADD KEY `headofdep_ID` (`headofdep_ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `role_ID_idx` (`role_ID`),
  ADD KEY `branch_ID` (`branch_ID`),
  ADD KEY `dep_ID` (`dep_ID`),
  ADD KEY `AppRole_ID` (`AppRole_ID`);

--
-- Indexes for table `evalfactor`
--
ALTER TABLE `evalfactor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `evaluation_plan`
--
ALTER TABLE `evaluation_plan`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `eval_ID_idx` (`eval_ID`),
  ADD KEY `manager_ID_idx` (`manager_ID1`),
  ADD KEY `employee_ID_idx` (`employee_ID`);

--
-- Indexes for table `factor`
--
ALTER TABLE `factor`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_factor_evaluation_plan1_idx` (`evaluation_plan_ID`),
  ADD KEY `fk_factor_evalfactor1_idx` (`evalfactor_ID`);

--
-- Indexes for table `indicator`
--
ALTER TABLE `indicator`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `factor_ID_idx` (`evalfactor_ID`),
  ADD KEY `obj_ID_idx` (`obj_ID1`);

--
-- Indexes for table `interimteam`
--
ALTER TABLE `interimteam`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_interimteam_project1_idx` (`project_ID`),
  ADD KEY `fk_interimteam_employee1_idx` (`employee_ID`),
  ADD KEY `task_ID` (`task_ID`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `dep_ID_idx` (`dep_ID`);

--
-- Indexes for table `objectives`
--
ALTER TABLE `objectives`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `manager` (`manager`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `manager_ID_idx` (`manager_ID`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `project_ID_idx` (`project_ID`),
  ADD KEY `eval_plan_ID_idx` (`eval_plan_ID`),
  ADD KEY `employee_ID` (`employee_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allocation`
--
ALTER TABLE `allocation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `approle`
--
ALTER TABLE `approle`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `evalfactor`
--
ALTER TABLE `evalfactor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `evaluation_plan`
--
ALTER TABLE `evaluation_plan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `factor`
--
ALTER TABLE `factor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `indicator`
--
ALTER TABLE `indicator`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `interimteam`
--
ALTER TABLE `interimteam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `objectives`
--
ALTER TABLE `objectives`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allocation`
--
ALTER TABLE `allocation`
  ADD CONSTRAINT `employee_ID1` FOREIGN KEY (`employee_ID1`) REFERENCES `employee` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `task_ID` FOREIGN KEY (`task_ID`) REFERENCES `task` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `branch`
--
ALTER TABLE `branch`
  ADD CONSTRAINT `company_ID` FOREIGN KEY (`company_ID`) REFERENCES `company` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `fk_department_branch1` FOREIGN KEY (`branch_ID`) REFERENCES `branch` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `role_ID` FOREIGN KEY (`role_ID`) REFERENCES `role` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `evaluation_plan`
--
ALTER TABLE `evaluation_plan`
  ADD CONSTRAINT `employee_ID` FOREIGN KEY (`employee_ID`) REFERENCES `employee` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `eval_ID` FOREIGN KEY (`eval_ID`) REFERENCES `evaluation` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `manager_ID1` FOREIGN KEY (`manager_ID1`) REFERENCES `manager` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `factor`
--
ALTER TABLE `factor`
  ADD CONSTRAINT `fk_factor_evalfactor1` FOREIGN KEY (`evalfactor_ID`) REFERENCES `evalfactor` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_factor_evaluation_plan1` FOREIGN KEY (`evaluation_plan_ID`) REFERENCES `evaluation_plan` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `indicator`
--
ALTER TABLE `indicator`
  ADD CONSTRAINT `factor_ID` FOREIGN KEY (`evalfactor_ID`) REFERENCES `evalfactor` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `obj_ID1` FOREIGN KEY (`obj_ID1`) REFERENCES `objectives` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `interimteam`
--
ALTER TABLE `interimteam`
  ADD CONSTRAINT `fk_interimteam_employee1` FOREIGN KEY (`employee_ID`) REFERENCES `employee` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_interimteam_project1` FOREIGN KEY (`project_ID`) REFERENCES `project` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `dep_ID` FOREIGN KEY (`dep_ID`) REFERENCES `department` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `manager_ID` FOREIGN KEY (`manager_ID`) REFERENCES `manager` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `eval_plan_ID` FOREIGN KEY (`eval_plan_ID`) REFERENCES `evaluation_plan` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `project_ID` FOREIGN KEY (`project_ID`) REFERENCES `project` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
