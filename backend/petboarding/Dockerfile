# Use a lightweight JDK base image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory inside container
WORKDIR /app

# Copy Maven build files
COPY pom.xml mvnw ./
COPY .mvn .mvn

# Download dependencies (cached unless pom.xml changes)
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Package the application
RUN ./mvnw package -DskipTests

# Run the jar
ENTRYPOINT ["java", "-jar", "target/petboarding-0.0.1-SNAPSHOT.jar"]
