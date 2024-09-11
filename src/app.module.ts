import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      "mongodb+srv://threads-user:snahmldY6lKYLlv3@cluster0.efzcccl.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
