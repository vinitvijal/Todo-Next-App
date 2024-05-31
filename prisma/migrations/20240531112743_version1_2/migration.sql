-- CreateTable
CREATE TABLE "User" (
    "userId" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Tags" (
    "userId" VARCHAR(255) NOT NULL,
    "tagId" VARCHAR(255) NOT NULL,
    "tagName" VARCHAR(255) NOT NULL,
    "tagColor" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("tagId")
);

-- CreateTable
CREATE TABLE "ListTable" (
    "userId" VARCHAR(255) NOT NULL,
    "listId" VARCHAR(255) NOT NULL,
    "listName" VARCHAR(255) NOT NULL,

    CONSTRAINT "ListTable_pkey" PRIMARY KEY ("listId")
);

-- CreateTable
CREATE TABLE "List" (
    "ListId" VARCHAR(255) NOT NULL,
    "TodoId" INTEGER NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("ListId")
);
