USE [master]
GO
/****** Object:  Database [MonitoringDashboardDb]    Script Date: 11/16/2023 12:07:28 AM ******/
CREATE DATABASE [MonitoringDashboardDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MonitoringDashboardDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLSERVER2011\MSSQL\DATA\MonitoringDashboardDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MonitoringDashboardDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLSERVER2011\MSSQL\DATA\MonitoringDashboardDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [MonitoringDashboardDb] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MonitoringDashboardDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MonitoringDashboardDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MonitoringDashboardDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MonitoringDashboardDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MonitoringDashboardDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MonitoringDashboardDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET RECOVERY FULL 
GO
ALTER DATABASE [MonitoringDashboardDb] SET  MULTI_USER 
GO
ALTER DATABASE [MonitoringDashboardDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MonitoringDashboardDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MonitoringDashboardDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MonitoringDashboardDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MonitoringDashboardDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MonitoringDashboardDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'MonitoringDashboardDb', N'ON'
GO
ALTER DATABASE [MonitoringDashboardDb] SET QUERY_STORE = ON
GO
ALTER DATABASE [MonitoringDashboardDb] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [MonitoringDashboardDb]
GO
/****** Object:  User [NOBILITY\Tamour.a]    Script Date: 11/16/2023 12:07:28 AM ******/
CREATE USER [NOBILITY\Tamour.a] FOR LOGIN [NOBILITY\Tamour.a] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](30) NULL,
	[NormalizedName] [varchar](30) NULL,
	[ConcurrencyStamp] [varchar](100) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Services]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Services](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ServiceName] [varchar](50) NULL,
	[Type] [varchar](50) NULL,
	[Url] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [bigint] NULL,
	[ModifiedDate] [datetime] NULL,
	[Deleted] [bit] NULL,
 CONSTRAINT [PK_Services] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Services_Status]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Services_Status](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ServiceId] [bigint] NULL,
	[StartTime] [datetime] NULL,
	[StopTime] [datetime] NULL,
	[Status] [varchar](50) NULL,
	[MemoryUsage] [varchar](50) NULL,
	[CpuUsage] [varchar](50) NULL,
	[IsEmailSent] [bit] NULL,
	[LastEmailSentAt] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [bigint] NULL,
	[ModifiedDate] [datetime] NULL,
	[Deleted] [bit] NULL,
 CONSTRAINT [PK_Services_Status] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TokenInfo]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TokenInfo](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](30) NULL,
	[RefreshToken] [varchar](100) NULL,
	[RefreshTokenExpiry] [datetime2](7) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TwoFactorAuthentication]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TwoFactorAuthentication](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[OTP2] [varchar](30) NOT NULL,
	[UserId] [varchar](30) NOT NULL,
	[UserName] [varchar](30) NOT NULL,
	[EmailAddress] [nvarchar](max) NOT NULL,
	[IsExpired] [bit] NOT NULL,
	[ExpiredDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_TwoFactorAuthentication] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserId] [bigint] NOT NULL,
	[RoleId] [bigint] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 11/16/2023 12:07:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](30) NULL,
	[Uid] [uniqueidentifier] NOT NULL,
	[UserName] [varchar](30) NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[PhoneNumber] [varchar](30) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (1, N'Admin', N'ADMIN', N'105bdc2c-0056-4646-8a87-b500dc74f84b')
INSERT [dbo].[Roles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (2, N'SuperAdmin', N'SUPERADMIN', N'9b825494-6562-4c05-a9aa-130c1845e08d')
INSERT [dbo].[Roles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (3, N'User', N'USER', N'016209b5-7c0a-4d80-983d-c9fb391f4700')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
SET IDENTITY_INSERT [dbo].[Services] ON 

INSERT [dbo].[Services] ([Id], [ServiceName], [Type], [Url], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (1, N'NPMWorkers', N'Console Application', NULL, 1, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[Services] ([Id], [ServiceName], [Type], [Url], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (2, N'TestWorker', N'Console Application', NULL, 1, NULL, NULL, NULL, NULL, 0)
INSERT [dbo].[Services] ([Id], [ServiceName], [Type], [Url], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (3, N'MDashboardWorkerService', N'Console Application', NULL, 1, NULL, NULL, NULL, NULL, 0)
SET IDENTITY_INSERT [dbo].[Services] OFF
GO
SET IDENTITY_INSERT [dbo].[Services_Status] ON 

INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (1, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:50:23.170' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (2, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:50:23.240' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (3, 3, NULL, CAST(N'2023-11-15T14:50:23.277' AS DateTime), N'Stopped', N'0MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:50:23.273' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (4, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:50:42.720' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (5, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, CAST(N'2023-11-15T14:50:42.747' AS DateTime), 0, CAST(N'2023-11-15T14:50:42.743' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (6, 3, NULL, CAST(N'2023-11-15T14:50:23.277' AS DateTime), N'Stopped', N'0MB', N'0%', 1, CAST(N'2023-11-15T14:50:42.773' AS DateTime), 0, CAST(N'2023-11-15T14:50:42.770' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (7, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:50:50.527' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (8, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:50:50.550' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (9, 3, NULL, CAST(N'2023-11-15T14:50:23.277' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:50:50.577' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (10, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:09.373' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (11, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:51:09.400' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (12, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.06MB', N'19.98%', 0, NULL, 0, CAST(N'2023-11-15T14:51:09.470' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (13, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:13.340' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (14, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:51:13.363' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (15, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.06MB', N'18.56%', 0, NULL, 0, CAST(N'2023-11-15T14:51:13.437' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (16, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:14.577' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (17, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:51:14.600' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (18, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.06MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:51:14.670' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (19, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:17.900' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (20, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:51:17.923' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (21, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.06MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:51:17.993' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (22, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:21.093' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (23, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:51:21.120' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (24, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.06MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:21.193' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (25, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:51:22.967' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (26, 2, NULL, CAST(N'2023-11-15T14:50:23.253' AS DateTime), N'Stopped', N'0MB', N'0%', 1, NULL, 0, CAST(N'2023-11-15T14:51:22.990' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (27, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.06MB', N'18.56%', 0, NULL, 0, CAST(N'2023-11-15T14:51:23.060' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (28, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.62MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:06.297' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (29, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:06.370' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (30, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:06.440' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (31, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:17.960' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (32, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:18.027' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (33, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:52:18.093' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (34, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:19.513' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (35, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:19.580' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (36, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:19.647' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (37, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:20.800' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (38, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'20.04%', 0, NULL, 0, CAST(N'2023-11-15T14:52:20.870' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (39, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'20.05%', 0, NULL, 0, CAST(N'2023-11-15T14:52:20.937' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (40, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:22.437' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (41, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:22.500' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (42, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'20.01%', 0, NULL, 0, CAST(N'2023-11-15T14:52:22.567' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (43, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:23.397' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (44, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T14:52:23.463' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (45, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'20.08%', 0, NULL, 0, CAST(N'2023-11-15T14:52:23.527' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (46, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:24.497' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (47, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'19.98%', 0, NULL, 0, CAST(N'2023-11-15T14:52:24.560' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (48, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:24.627' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (49, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:25.640' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (50, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:25.707' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (51, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'20.08%', 0, NULL, 0, CAST(N'2023-11-15T14:52:25.770' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (52, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:26.993' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (53, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'19.99%', 0, NULL, 0, CAST(N'2023-11-15T14:52:27.063' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (54, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:27.127' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (55, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:30.127' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (56, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.41MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:52:30.197' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (57, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:30.267' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (58, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:36.997' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (59, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.22MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:37.063' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (60, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:37.130' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (61, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.59MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:38.577' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (62, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.22MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:38.643' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (63, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:52:38.707' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (64, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:52:45.600' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (65, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.22MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T14:52:45.667' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (66, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.04MB', N'21.71%', 0, NULL, 0, CAST(N'2023-11-15T14:52:45.733' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (67, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.69MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:05.307' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (68, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.39MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:05.377' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (69, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:05.437' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (70, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.69MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:07.580' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (71, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.39MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T14:54:07.647' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (72, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:54:07.710' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (73, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.69MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:12.120' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (74, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.35MB', N'20.02%', 0, NULL, 0, CAST(N'2023-11-15T14:54:12.183' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (75, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:12.253' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (76, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.69MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:14.580' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (77, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.35MB', N'18.56%', 0, NULL, 0, CAST(N'2023-11-15T14:54:14.643' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (78, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'17.32%', 0, NULL, 0, CAST(N'2023-11-15T14:54:14.710' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (79, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:36.183' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (80, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.66MB', N'12.4%', 0, NULL, 0, CAST(N'2023-11-15T14:54:36.263' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (81, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:36.330' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (82, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:38.697' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (83, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.66MB', N'18.64%', 0, NULL, 0, CAST(N'2023-11-15T14:54:38.767' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (84, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'18.64%', 0, NULL, 0, CAST(N'2023-11-15T14:54:38.830' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (85, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:45.840' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (86, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.6MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:45.907' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (87, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:45.970' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (88, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:47.513' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (89, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.6MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:47.580' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (90, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'19.99%', 0, NULL, 0, CAST(N'2023-11-15T14:54:47.643' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (91, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:50.190' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (92, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.6MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:54:50.287' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (93, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:50.380' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (94, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:51.603' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (95, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.6MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:54:51.667' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (96, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:54:51.737' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (97, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:54:57.840' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (98, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.57MB', N'18.65%', 0, NULL, 0, CAST(N'2023-11-15T14:54:57.903' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (99, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'18.64%', 0, NULL, 0, CAST(N'2023-11-15T14:54:57.970' AS DateTime), 0, NULL, 0)
GO
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (100, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:55:00.007' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (101, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.57MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:55:00.080' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (102, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T14:55:00.147' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (103, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:55:01.913' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (104, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.57MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T14:55:01.980' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (105, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.98MB', N'18.64%', 0, NULL, 0, CAST(N'2023-11-15T14:55:02.043' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (106, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.66MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T14:56:57.390' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (107, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'13.81MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T14:56:57.457' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (108, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.01MB', N'20.05%', 0, NULL, 0, CAST(N'2023-11-15T14:56:57.520' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (109, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.04MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T15:14:15.240' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (110, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.26MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T15:14:15.483' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (111, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.08MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T15:14:15.557' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (112, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'23.96MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T15:21:35.057' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (113, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.65MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T15:21:35.317' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (114, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.07MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T15:21:35.383' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (115, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.03MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T15:21:59.243' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (116, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.16MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T15:21:59.517' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (117, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.08MB', N'21.65%', 0, NULL, 0, CAST(N'2023-11-15T15:21:59.580' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (118, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T15:26:13.777' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (119, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.71MB', N'18.61%', 0, NULL, 0, CAST(N'2023-11-15T15:26:13.847' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (120, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.14MB', N'20.04%', 0, NULL, 0, CAST(N'2023-11-15T15:26:13.910' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (121, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.15MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T15:51:59.693' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (122, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.7MB', N'18.56%', 0, NULL, 0, CAST(N'2023-11-15T15:51:59.760' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (123, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.14MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T15:51:59.823' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (124, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.28MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T16:21:59.943' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (125, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.04MB', N'21.7%', 0, NULL, 0, CAST(N'2023-11-15T16:22:00.003' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (126, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.14MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T16:22:00.063' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (127, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.72MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T16:52:36.427' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (128, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.21MB', N'23.67%', 0, NULL, 0, CAST(N'2023-11-15T16:52:36.487' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (129, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.14MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T16:52:36.543' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (130, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.72MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T17:22:36.643' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (131, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.21MB', N'23.67%', 0, NULL, 0, CAST(N'2023-11-15T17:22:36.703' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (132, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.14MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T17:22:36.760' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (133, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.72MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T17:52:36.867' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (134, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.73MB', N'23.67%', 0, NULL, 0, CAST(N'2023-11-15T17:52:36.927' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (135, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.14MB', N'21.77%', 0, NULL, 0, CAST(N'2023-11-15T17:52:36.983' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (136, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.75MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T17:58:47.663' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (137, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.77MB', N'23.67%', 0, NULL, 0, CAST(N'2023-11-15T17:58:48.167' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (138, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.48MB', N'18.62%', 0, NULL, 0, CAST(N'2023-11-15T17:58:48.277' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (139, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.75MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T18:27:49.297' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (140, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.74MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T18:27:49.600' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (141, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.61MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T18:27:49.667' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (142, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.75MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T18:47:49.673' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (143, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.74MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T18:47:49.973' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (144, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.11MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T18:47:50.063' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (145, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.75MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T18:51:07.447' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (146, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.78MB', N'18.6%', 0, NULL, 0, CAST(N'2023-11-15T18:51:07.727' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (147, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'15.11MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T18:51:07.810' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (148, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.75MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T18:56:37.560' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (149, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'14.75MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T18:56:37.847' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (150, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.25MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T18:56:37.950' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (151, 1, CAST(N'2023-11-15T17:55:20.660' AS DateTime), NULL, N'Running', N'24.75MB', N'0%', 0, NULL, 0, CAST(N'2023-11-15T18:59:00.993' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (152, 2, CAST(N'2023-11-15T19:52:00.533' AS DateTime), NULL, N'Running', N'15.23MB', N'20.03%', 0, NULL, 0, CAST(N'2023-11-15T18:59:01.277' AS DateTime), 0, NULL, 0)
INSERT [dbo].[Services_Status] ([Id], [ServiceId], [StartTime], [StopTime], [Status], [MemoryUsage], [CpuUsage], [IsEmailSent], [LastEmailSentAt], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Deleted]) VALUES (153, 3, CAST(N'2023-11-15T19:51:01.813' AS DateTime), NULL, N'Running', N'14.31MB', N'17.36%', 0, NULL, 0, CAST(N'2023-11-15T18:59:01.430' AS DateTime), 0, NULL, 0)
SET IDENTITY_INSERT [dbo].[Services_Status] OFF
GO
SET IDENTITY_INSERT [dbo].[TokenInfo] ON 

INSERT [dbo].[TokenInfo] ([Id], [Username], [RefreshToken], [RefreshTokenExpiry]) VALUES (1, N'admin', N'BLvPJWhVgH/skvjcPXpAEA3zPd63kVDrs33i4Y5H2KM=', CAST(N'2023-11-16T19:01:53.4730934' AS DateTime2))
INSERT [dbo].[TokenInfo] ([Id], [Username], [RefreshToken], [RefreshTokenExpiry]) VALUES (2, N'Junaid', N'dNFE8wbR6j07pJLhCizGjzn/pv68XdTuuzBlkZCUEsc=', CAST(N'2023-10-24T15:13:46.0198414' AS DateTime2))
INSERT [dbo].[TokenInfo] ([Id], [Username], [RefreshToken], [RefreshTokenExpiry]) VALUES (3, N'Iqbal', N'gkZFUBESNTM52bAjWGB3TzNT0ckTFC/8H69YNRDB+J8=', CAST(N'2023-11-03T18:57:09.6350281' AS DateTime2))
INSERT [dbo].[TokenInfo] ([Id], [Username], [RefreshToken], [RefreshTokenExpiry]) VALUES (4, N'TI', N'nF4ypxWOQ1UHOT2PAxDL+xB5Ugs0+xfAAQCgSm3K4cU=', CAST(N'2023-11-03T19:02:02.7190678' AS DateTime2))
SET IDENTITY_INSERT [dbo].[TokenInfo] OFF
GO
SET IDENTITY_INSERT [dbo].[TwoFactorAuthentication] ON 

INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10108, N'919895', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-13T11:33:23.7102328' AS DateTime2), CAST(N'2023-11-13T11:03:23.7102810' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10109, N'194042', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-13T16:11:40.9523354' AS DateTime2), CAST(N'2023-11-13T15:41:40.9523810' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10110, N'514074', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T11:15:32.0341693' AS DateTime2), CAST(N'2023-11-15T10:45:32.0342135' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10111, N'850662', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T15:34:40.5229089' AS DateTime2), CAST(N'2023-11-15T15:04:40.5229537' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10112, N'610747', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:11:04.5737222' AS DateTime2), CAST(N'2023-11-15T15:41:04.5737643' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10113, N'483396', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:11:35.4289230' AS DateTime2), CAST(N'2023-11-15T15:41:35.4289239' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10114, N'936966', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:13:17.2514223' AS DateTime2), CAST(N'2023-11-15T15:43:17.2514228' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10115, N'877461', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:14:34.8245641' AS DateTime2), CAST(N'2023-11-15T15:44:34.8245674' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10116, N'729227', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:15:06.0839678' AS DateTime2), CAST(N'2023-11-15T15:45:06.0839683' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10117, N'910397', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:19:08.5473465' AS DateTime2), CAST(N'2023-11-15T15:49:08.5473477' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10118, N'276086', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T16:27:31.2986494' AS DateTime2), CAST(N'2023-11-15T15:57:31.2986507' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10119, N'922885', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T17:24:27.4680815' AS DateTime2), CAST(N'2023-11-15T16:54:27.4680826' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10120, N'553665', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T17:26:58.1193856' AS DateTime2), CAST(N'2023-11-15T16:56:58.1193869' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10121, N'984962', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T17:31:35.8406289' AS DateTime2), CAST(N'2023-11-15T17:01:35.8406299' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10122, N'827357', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T17:34:18.8727937' AS DateTime2), CAST(N'2023-11-15T17:04:18.8727944' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10123, N'101189', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T17:50:27.8809266' AS DateTime2), CAST(N'2023-11-15T17:20:27.8809282' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10124, N'259468', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T18:28:53.9027204' AS DateTime2), CAST(N'2023-11-15T17:58:53.9027628' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10125, N'878996', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T18:57:57.1499915' AS DateTime2), CAST(N'2023-11-15T18:27:57.1500520' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10126, N'388166', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T19:17:52.5888567' AS DateTime2), CAST(N'2023-11-15T18:47:52.5889012' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10127, N'686538', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T19:21:09.9446560' AS DateTime2), CAST(N'2023-11-15T18:51:09.9446997' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10128, N'853926', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T19:26:44.1894364' AS DateTime2), CAST(N'2023-11-15T18:56:44.1894786' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10129, N'292855', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T19:29:07.3765433' AS DateTime2), CAST(N'2023-11-15T18:59:07.3765870' AS DateTime2))
INSERT [dbo].[TwoFactorAuthentication] ([Id], [OTP2], [UserId], [UserName], [EmailAddress], [IsExpired], [ExpiredDate], [CreatedDate]) VALUES (10130, N'487017', N'1', N'admin', N'admin@gmail.com', 1, CAST(N'2023-11-15T19:31:40.0287368' AS DateTime2), CAST(N'2023-11-15T19:01:40.0287375' AS DateTime2))
SET IDENTITY_INSERT [dbo].[TwoFactorAuthentication] OFF
GO
INSERT [dbo].[UserRoles] ([UserId], [RoleId]) VALUES (1, 1)
INSERT [dbo].[UserRoles] ([UserId], [RoleId]) VALUES (1, 2)
INSERT [dbo].[UserRoles] ([UserId], [RoleId]) VALUES (2, 3)
INSERT [dbo].[UserRoles] ([UserId], [RoleId]) VALUES (3, 3)
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Name], [Uid], [UserName], [Email], [EmailConfirmed], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (1, N'admin', N'fbd45815-3d94-4cc6-9ad7-0f1696f5640b', N'admin', N'admin@gmail.com', 1, N'ADILZ5IxA4uzVrJpVFl/anoZ13HG2S1RzSPRziyL5NDSt5DmiqGk40rlRN3ookV+OQ==', NULL, 0, 1, NULL, 1, 0)
INSERT [dbo].[Users] ([Id], [Name], [Uid], [UserName], [Email], [EmailConfirmed], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (2, N'hamza', N'04641e32-ecf1-4a4f-a549-e80b61935970', N'Iqbal', N'hamza@nobilityrcm.com', 1, N'AFbUx5+LgXGuIWrLy9ds043iA4ZXejjGXGIpbMt/h2TERUh/gNCdvTrxgAxSr1Uzhw==', NULL, 0, 1, NULL, 1, 0)
INSERT [dbo].[Users] ([Id], [Name], [Uid], [UserName], [Email], [EmailConfirmed], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (3, N'Taimoor', N'b29ec55c-ea3d-472e-8985-cf28b37a214e', N'TI', N'taimoor@nobilityrcm.com', 1, N'AA9fSYArp0+RUolhUCY2k4IaBpsh31GT946JE4vYDdgOq5gPHRHdpoR3YGhUes6bsA==', NULL, 0, 1, NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
USE [master]
GO
ALTER DATABASE [MonitoringDashboardDb] SET  READ_WRITE 
GO
