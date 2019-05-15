DataIntegration <- function()
{
  thisEnv <- environment()

  funlist <- list(

    thisEnv = thisEnv,

    coloumNames = function(file1)
    {
      read.csv(file=file1,header = FALSE,nrow=1)
    },
    r = function(a,b)
    {
      return(a*b)
    },


    readcsv = function(file1,header1)
    {
      read.csv(file = file1,header = header1);
    })

  assign('this',funlist,envir=thisEnv)

  class(funlist) <- append(class(funlist),"DataIntegration")

  return(funlist)
}
returncNames <- function(file1)
{
  return(read.csv(file=file1,header = FALSE,nrow=1))
}
readcsvnew <- function(header1,file1)
{
    result[i] <- di$readcsv(file1,header1)
}


