-- CreateTable
CREATE TABLE "newTodo" (
    "userId" VARCHAR(255) NOT NULL,
    "todoId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" VARCHAR(255) NOT NULL,
    "tag" VARCHAR(255) NOT NULL,

    CONSTRAINT "newTodo_pkey" PRIMARY KEY ("todoId")
);
